# == Schema Information
#
# Table name: favorites
#
#  id            :integer          not null, primary key
#  customer_id   :integer          not null
#  restaurant_id :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Favorite < ApplicationRecord
  validates :customer_id, :restaurant_id, presence: true

  belongs_to :customer,
    foreign_key: :customer_id,
    class_name: :User

  belongs_to :restaurant,
    foreign_key: :restaurant_id,
    class_name: :Restaurant

end
