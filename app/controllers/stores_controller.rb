class StoresController < ApplicationController

    def index
        render json: Store.all
    end

    # def show
    #     store = Store.find(params[:id])
    #     render json: serializer: #TBD on what is listed 
    # end

    # def create
    #     store = Store.create!()
    # end

    # def update
    # end

    # def destroy
    # end

    # private



end
