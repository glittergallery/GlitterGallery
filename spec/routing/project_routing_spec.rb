require 'spec_helper'

describe ProjectsController, type: :routing do
  context 'public' do
    it 'to #blob' do
      expect(get('tester/test/blob/master/icons/small/smiley.png')).to route_to(
        'projects#blob',
        user_id: 'tester',
        id: 'test',
        oid: 'master',
        destination: 'icons/small/smiley.png'
      )
    end

    it 'to #tree with destination' do
      expect(get('tester/test/tree/master/icons/small')).to route_to(
        'projects#tree',
        user_id: 'tester',
        id: 'test',
        tree_id: 'master',
        destination: 'icons/small'
      )
    end

    it 'to #tree without destination' do
      expect(get('tester/test/tree/master')).to route_to(
        'projects#tree',
        user_id: 'tester',
        id: 'test',
        tree_id: 'master'
      )
    end
  end

  context 'private' do
    before :each do
      @secret = SecureRandom.hex
    end

    it 'to #blob' do
      expect(get("tester/test/#{@secret}/blob/master/icons/small/smiley.png"))
        .to route_to(
          'projects#blob',
          user_id: 'tester',
          id: 'test',
          xid: @secret,
          oid: 'master',
          destination: 'icons/small/smiley.png'
        )
    end

    it 'to #tree with destination' do
      expect(get("tester/test/#{@secret}/tree/master/icons/small")).to route_to(
        'projects#tree',
        user_id: 'tester',
        id: 'test',
        xid: @secret,
        tree_id: 'master',
        destination: 'icons/small'
      )
    end

    it 'to #tree without destination' do
      expect(get("tester/test/#{@secret}/tree/master")).to route_to(
        'projects#tree',
        user_id: 'tester',
        id: 'test',
        xid: @secret,
        tree_id: 'master'
      )
    end
  end
end
