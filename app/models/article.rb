class Article < ActiveRecord::Base
  validates :title, :content, presence: true
  validates :title, length: { in: 5..130}

end
