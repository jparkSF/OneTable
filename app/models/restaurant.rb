# == Schema Information
#
# Table name: restaurants
#
#  id           :integer          not null, primary key
#  name         :string           not null
#  owner_id     :integer
#  address      :string
#  phone_number :string           not null
#  website      :string
#  description  :text             not null
#  opening      :string
#  closing      :string
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Restaurant < ApplicationRecord
  validates :name, :address, :phone_number, presence: true
  validates :name, :phone_number, uniqueness: true

  has_attached_file :image, styles: { medium: "300x300>", thumb: "100x100>" }, default_url: "default_restaurant.jpg"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/

  def image_url
     ActionController::Base.helpers.asset_path(image.url)   
  end 
end
