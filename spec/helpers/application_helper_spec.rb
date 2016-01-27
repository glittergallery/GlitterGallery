require 'spec_helper'

describe ApplicationHelper, type: :helper do
  describe '#markdown' do
    it 'adds head tag to # text' do
      markdown = helper.markdown '# I am head'
      assert_equal "<h1>I am head</h1>\n", markdown
    end

    it 'adds strong and itallic tags' do
      markdown = helper.markdown 'I am **bold** and *itallic*'
      assert_equal '<p>I am <strong>bold</strong>' +
                    " and <em>itallic</em></p>\n", markdown
    end

    it 'adds blockquote and code tags' do
      markdown = helper.markdown ">quote\n\n `printf()`"
      assert_equal "<blockquote>\n<p>quote</p>\n</blockquote>\n\n" +
                   "<p><code>printf()</code></p>\n", markdown
    end

    it 'adds anchor tags' do
      markdown = helper.markdown '[google](https://google.com)'
      assert_equal "<p><a href=\"https://google.com\">google</a></p>\n",
                   markdown
    end

    it 'adds ordered and unordered lists tags' do
      markdown = helper.markdown "* Item 1\n* Item 2\n\n" +
                                 "1. Item 1\n1. Item 2"
      assert_equal "<ul>
<li>Item 1</li>
<li>Item 2</li>
</ul>\n
<ol>
<li>Item 1</li>
<li>Item 2</li>
</ol>\n", markdown
    end

    it 'allows nesting heading tags' do
      markdown = helper.markdown "# Head 1\n## Head 2\n### Head 3"
      assert_equal "<h1>Head 1</h1>\n
<h2>Head 2</h2>\n
<h3>Head 3</h3>\n", markdown
    end

    it 'allows nesting of lists' do
      markdown = helper.markdown "* list item 1
* list item 2

  * list item 2.1
  * list item 2.2"
      assert_equal "<ul>
<li>list item 1</li>
<li><p>list item 2</p>

<ul>
<li>list item 2.1</li>
<li>list item 2.2</li>
</ul></li>
</ul>\n", markdown
    end

    it 'escapes html tags' do
      markdown = helper.markdown '<a href=\"test\" ' +
                                 "onclick=\"alert('test')\">test;"
      assert_equal "<p>test;</p>\n", markdown
    end

    it 'hard wraps new lines' do
      markdown = helper.markdown "I am
two lines"
      assert_equal "<p>I am<br>
two lines</p>\n", markdown
    end
  end
end
