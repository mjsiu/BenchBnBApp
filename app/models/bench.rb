class Bench < ActiveRecord::Base

  def self.in_bounds(bounds)
    if this.lat < bounds.northEast[lat] && this.lat > bounds.southWest[lat]
      if this.lng < bounds.northEast[lng] && this.lng > bounds.southWest[lng]
        true
      end
    end
    false
  end

end
