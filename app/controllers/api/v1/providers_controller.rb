class Api::V1::ProvidersController < ApplicationController
  def index
    if params[:search] === ""
      providers = Provider.all
    else
      providers = Provider.search(params[:search])
    end

    render json: providers
  end

  def import
    Provider.import(params[:file])
    redirect_to root_url, notice: "Data imported!"
  end

  def show
    @provider = Provider.find(params[:id])
  end

  private

  def provider_params
    params.require(:provider).permit(:name, :mainOfficeLocation, :countiesServed, :servicesOffered, :contactInformation, :website)
  end
end
