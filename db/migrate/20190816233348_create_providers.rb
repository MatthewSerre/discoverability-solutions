class CreateProviders < ActiveRecord::Migration[5.2]
  def change
    create_table :providers do |t|
      t.string :name
      t.string :mainOfficeLocation
      t.string :countiesServed
      t.string :servicesOffered
      t.string :contactInformation
      t.string :website

      t.timestamps
    end
  end
end
