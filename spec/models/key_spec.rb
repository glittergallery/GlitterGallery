require 'spec_helper'

describe Key do
  describe 'Associations' do
    it { is_expected.to belong_to(:user) }
  end

  describe 'Validation' do
    it { is_expected.to validate_presence_of(:title) }
    it { is_expected.to validate_presence_of(:key) }
    it { is_expected.to validate_length_of(:title) }
    it { is_expected.to validate_length_of(:key) }
  end

  describe 'Methods' do
    before do
      allow_any_instance_of(Key).to receive(:add_to_shell).and_return(true)
    end

    context 'shell_id' do
      let(:key) { create(:key) }

      it 'formats id properly' do
        expect(key.shell_id).to eq("key-#{key.id}")
      end
    end
  end

  describe 'validation of' do
    before do
      allow_any_instance_of(Key).to receive(:add_to_shell).and_return(true)
    end

    context 'uniqueness' do
      let(:user) { create(:user) }
      let(:dummy_key) { create(:key, user: user) }

      it 'accepts the key once' do
        expect(build(:key, user: user)).to be_valid
      end

      it 'does not accept the exact same key twice' do
        expect(build(:key, key: dummy_key.key, user: user)).not_to be_valid
      end

      it 'does not accept a duplicate key with a different comment' do
        duplicate = build(:key, key: dummy_key.key, user: user)
        duplicate.key << ' extra comment'
        expect(duplicate).not_to be_valid
      end
    end

    context 'fingerprintable key' do
      it 'accepts the fingerprintable key' do
        expect(build(:key)).to be_valid
      end

      it 'rejects an unfingerprintable key that contains a space' do
        key = build(:key)

        # Not always the middle, but close enough
        key.key = key.key[0..100] + ' ' + key.key[101..-1]

        expect(key).not_to be_valid
      end

      it 'rejects the unfingerprintable key (not a key)' do
        expect(build(:key, key: 'ssh-rsa an-invalid-key==')).not_to be_valid
      end

      it 'rejects the multiple line key' do
        key = build(:key)
        key.key.gsub!(' ', '\n')
        expect(key).not_to be_valid
      end
    end
  end

  describe 'callbacks' do
    context 'add new key' do
      it 'should add new key to authorized_file' do
        key = build(:key, id: 7)
        expect(Gg::Shell).to receive(:add_key).with(key.shell_id, key.key)
        key.save
      end
    end

    context 'remove key from authorized_file' do
      before do
        allow(Gg::Shell).to receive(:remove_key).and_return(true)
        allow_any_instance_of(Key).to receive(:add_to_shell).and_return(true)
      end

      it 'should remove key from authorized_file' do
        key = create(:key)
        expect(Gg::Shell).to receive(:remove_key).with(key.shell_id, key.key)
        key.destroy
      end
    end
  end
end
