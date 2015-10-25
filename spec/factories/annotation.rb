FactoryGirl.define do
  factory :annotation do
    text 'flying  monkeys'
    blob_id '453bb23f7defbd153379a22284445dbfd8008295'
    json "{\"src\":\"http://localhost:3000/some/path\"," +
      "\"text\":\"flying monkeys\",\"shapes\":[{\"type\":\"rect\",\"geometry" +
      "\":{\"x\":0.595,\"y\":0.278,\"width\":0.147,\"height\":0.193},\"style" +
      "\":{}}],\"context\":\"http://localhost:3000/some/path\",\"id\":1," +
      "\"username\":\"user-name\",\"updated_at\":\"October 25, 2015\"}"
    association :user
  end
end
