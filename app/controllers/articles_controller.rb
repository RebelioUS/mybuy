class ArticlesController < ApplicationController
  def index
    @articles = Article.all
  end

  def show
  end

  def edit
  end

  def update
  end

  def new
    @article = Article.new
  end

  def create
  end

  def destroy
  end
end
