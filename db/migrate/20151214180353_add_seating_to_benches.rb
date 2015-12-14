class AddSeatingToBenches < ActiveRecord::Migration
  def change
    add_column :benches, :seats, :float
  end
end
