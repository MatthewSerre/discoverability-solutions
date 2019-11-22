class Provider < ApplicationRecord
    require 'csv'
    include PgSearch::Model
    pg_search_scope :search, against: [:name, :mainOfficeLocation, :countiesServed, :servicesOffered]

    def self.import(file)
        CSV.foreach(file.path, headers:true, encoding: 'iso-8859-1:utf-8') do |row|
            Provider.create! row.to_hash
        end
    end
end