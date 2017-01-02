class CreateSkills < ActiveRecord::Migration[5.0]
  def change
    create_table :skills do |t|
      t.string :name
      t.float :rate
      t.string :industry
      t.float :total_exp
      t.boolean :is_certify

      t.timestamps
    end
  end
end
