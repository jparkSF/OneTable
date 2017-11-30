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

class Restaurant < ApplicationRecord
  validates :name, :address, :phone, presence: true
  validates :name, :phone, uniqueness: true




  has_attached_file :image, styles: { medium: "300x300>", thumb: "100x100>" }, default_url: "default_restaurant.jpg"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/

  belongs_to :owner,
    foreign_key: :owner_id,
    class_name: :User,
    validate: false

  has_many :favorites,
    foreign_key: :restaurant_id,
    class_name: :Favorite


  def image_url
     ActionController::Base.helpers.asset_path(image.url)
  end
end
