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

class Restaurant < ApplicationRecord
  validates :name, :address, :phone_number, :website, presence: true
  validates :name, :phone_number, uniqueness: true
end
