class CreateSkills < ActiveRecord::Migration[5.0]
  def change
    create_table :skills do |t|
      t.string :name
      t.float :rate, default: 0
      t.string :industry
      t.float :total_exp, default: 0
      t.boolean :is_certify, default: false

      t.timestamps
    end
  end
end
