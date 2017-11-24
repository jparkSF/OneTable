# == Schema Information
#
# Table name: restaurants
#
#  id           :integer          not null, primary key
#  name         :string           not null
#  owner_id     :integer
#  address      :string
#  phone_number :integer          not null
#  website      :string
#  description  :text             not null
#  opening      :time
#  closing      :time
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

require 'test_helper'

class RestaurantTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
