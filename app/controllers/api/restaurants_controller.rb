class Api::RestaurantsController < ApplicationController
  def index
    @restaurants = Restaurant.all
  end

  def show
    @restaurant = Restaurant.find(params[:id])
  end

  def create
    @restaurant = Restaurant.new(restaurant_params)

    puts @restaurant
    if @restaurant.save
      render "api/restaurants/show"
    else
      render json: @restaurant.errors.full_messages, status: 422
    end


  end

  private

  def restaurant_params
    params.require(:restaurant).permit(
      :name,
      :owner_id,
      :address,
      :phone,
      :website,
      :description,
      :opening,
      :closing
    )
  end



end
