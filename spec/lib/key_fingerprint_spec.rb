require 'spec_helper'

describe Gg::KeyFingerprint do
  let(:key) do
    'ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQCx3ke+rnMT/ILY81K1un1CW' +
    'f9ghcPglIlV7pMV2H5AwyC/Dx5x+DyKmNmhBmvCYJ+1we8f0pPXLx2QpyAXw8s0s+sBL/gk' +
    'izsqqwrUzK9Rlkj58kvNFl8gLQk3qqs8dR6bODP9LQqCGhMFErQtDQTvBq91jhWuIIunumK' +
    '7T+0GWDMf7O9CNdr/aprYrUfuGLggOdz0oPja792V+ay1xWAHEOueKfGvOGFDbQlcTT2uI9' +
    'wYz9RGkLhDNOo4S74W59xMwMpf77XsoTYxcdrAT7WpTlzaj2usbbGBgcBKx5kb0dPBOQ3rQ' +
    'adtZnLjN2dZAeapUO2MElyX0lxt1nrbIKCZ addie@localhost.localdomain'
  end

  let(:fingerprint) { 'a1:c2:2b:79:2f:48:99:8d:99:52:91:35:3c:8e:25:82' }

  describe '#fingerprint' do
    it "generates the key's fingerprint" do
      expect(Gg::KeyFingerprint.new(key).fingerprint).to eq(fingerprint)
    end
  end
end
