class Api::RestaurantsController < ApplicationController
  def index 
    @restaurants = Restaurant.all
  end 
  
  def show 
    @restaurant = Restaurant.find(params[:id])
  end 
  
  def create
    @restaurant = Restaurant.new(restaurant_params)
  end
  
  private 
  
  def restaurant_params
    params.require(:restaurant).permit(
      :name,
      :owner_id,
      :address,
      :phone_number,
      :website,
      :description,
      :opening,
      :closing
    )
  end 

  
  
end
