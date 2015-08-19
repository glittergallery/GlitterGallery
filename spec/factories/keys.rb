FactoryGirl.define do

  factory :key do
    association :user
    sequence :key, (0..9).cycle do |n|
      'ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQCx3ke+rnMT/ILY81K1un1CWf9ghcPgl' +
      'IlV7pMV2H5AwyC/Dx5x+DyKmNmhBmvCYJ+1we8f0pPXLx2QpyAXw8s0s+sBL/gkizsqqw' +
      'rUzK9Rlkj58kvNFl8gLQk3qqs8dR6bODP9LQqCGhMFErQtDQTvBq91jhWuIIunumK7T+0' +
      'GWDMf7O9CNdr/aprYrUfuGLggOdz0oPja792V+ay1xWAHEOueKfGvOGFDbQlcTT2uI9wY' +
      'z9RGkLhDNOo4S74W59xMwMpf77XsoTYxcdrAT7WpTlzaj2usbbGBgcBKx5kb0dPBOQ3rQ' +
      "adtZnLjN2dZAeapUO2MElyX0lxt1nrbIKC#{n} addie@localhost.localdomain"
    end
    title 'MyString'
  end
end
