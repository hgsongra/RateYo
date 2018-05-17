class Skill < ApplicationRecord
	validates :name, :rate, :industry, :total_exp, presence: true
end
