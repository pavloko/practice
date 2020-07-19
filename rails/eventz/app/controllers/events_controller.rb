class EventsController < ApplicationController
  def index
    @age = 100
    @events = Event.all
  end

  def show
    @event = Event.find(params[:id])
  end
end
