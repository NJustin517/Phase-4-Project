class ItemsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response


    def index
        render json: Item.all
    end

    def show
        item = Item.find(params[:id])
        render json: item, serializer: #TBD on what is listed 
    end

    def create
        item = Item.create!(item_params)
        render json: item, status: :created
    end

    def update
        item = Item.find(params[:id])
        item.update!(item_params)
        render json: item
    end

    def destroy
        item = Item.find(params[:id])
        item.destroy
        head :no_content
    end

    private

    def item_params
        params.permit(:name, :price, :description)
    end

    def render_not_found_response
        render json: { error: "Item not found" }, status: :not_found
    end
    
    def render_unprocessable_entity_response(exception)
        render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
    end

end
