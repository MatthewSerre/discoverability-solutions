require 'csv'

csv_text = File.read(Rails.root.join('lib', 'seeds', 'providers.csv'))
csv = CSV.parse(csv_text.scrub, headers: true)
csv.each do |row|
    p = Provider.new
    p.name = row['name']
    p.mainOfficeLocation = row['mainOfficeLocation']
    p.countiesServed = row['countiesServed']
    p.servicesOffered = row['servicesOffered']
    p.contactInformation = row['contactInformation']
    p.website = row['website']
    p.save
end