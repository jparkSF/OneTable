# == Schema Information
#
# Table name: reviews
#
#  id            :integer          not null, primary key
#  author_id     :integer          not null
#  restaurant_id :integer          not null
#  rating        :integer          not null
#  comment       :text             not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Review < ApplicationRecord
  validates :author_id, :restaurant_id, :rating, :comment, presence: true
  # validates_uniqueness_of :author_id, scope: :restaurant_id

  belongs_to :author,
  foreign_key: :author_id,
  class_name: :User

  belongs_to :restaurant,
  foreign_key: :restaurant_id,
  class_name: :Restaurant

end
