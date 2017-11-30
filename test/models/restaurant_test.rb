# == Schema Information
#
# Table name: restaurants
#
#  id                 :integer          not null, primary key
#  name               :string           not null
#  owner_id           :integer
#  address            :string
#  city               :string           not null
#  state              :string
#  postal_code        :integer          not null
#  area               :string
#  phone              :string
#  country            :string
#  opening            :string           default("11:30:00")
#  closing            :string           default("17:30:00")
#  price              :integer
#  lat                :float
#  lng                :float
#  website            :string
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#

require 'test_helper'

class RestaurantTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
