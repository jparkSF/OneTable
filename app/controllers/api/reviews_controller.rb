class Api::ReviewsController < ApplicationController
  

  
  def create
    @review = Review.new(review_params)
    
    
    if @review.save
      render json: ['Succesfully added']
    else
      render json: "Something went wrong", status: 422
    end

  end

  def destroy
  
  end

  private
  def review_params
    params.require(:review).permit(
                              :author_id,
                              :restaurant_id,
                              :rating,
                              :comment)
  end
end
