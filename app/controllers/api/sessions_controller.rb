class Api::SessionsController < ApplicationController
  def create
    # Find user by credentials
    @user = User.find_by_credentials(
      params[:user][:email], 
      params[:user][:password]
      )
    puts "+"*10
      puts @user
      puts "+"*10

    if @user
      login(@user)
      render "api/users/show"

      puts "current user below"
      p current_user
      puts "+"*10
    else
      render json: ["Invalid username/password combination"], status: 401
    end
  end

  def destroy
    @user = current_user
    if @user
      logout
      render "api/users/show"


     puts "current user below after logout"
      p current_user
      puts "+"*10
    else
      render json: ["Nobody signed in"], status: 404
    end
  end
end
