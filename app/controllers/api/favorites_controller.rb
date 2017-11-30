class Api::FavoritesController < ApplicationController
  def index
    @favorite = Favorite.find_by(customer_id: params[:customer_id],
                                restaurant_id: params[:restaurant_id])
    
  end

  def create
    @favorite = Favorite.new(favorite_params)
    checked = Favorite.exists?(:customer_id => params[:favorite][:customer_id],
                        :restaurant_id => params[:favorite][:restaurant_id])
    
    if checked
      render json: ['Already favorited'], status: 422
    else
      @favorite.save
      render json: "added to favorites"
    end

  end

  def destroy
    @favorite = Favorite.find_by(favorite_params)
    if @favorite.destroy
      render json: "removed from favorites"
    else
      render json: "Favorite doesn't exist", status: 404
    end
  end

  private
  def favorite_params
    params.require(:favorite).permit(:customer_id,:restaurant_id)
  end
end
