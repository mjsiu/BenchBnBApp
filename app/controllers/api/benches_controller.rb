class Api::BenchesController < ApplicationController
  def index
    @benches = Bench.all
  end

  def create
    @bench = Bench.new(bench_params)
    if @bench.save
      render json: @bench
    end
  end

  def bench_params
    params.require(:bench).permit(:lat, :lng, :description)
  end

end
