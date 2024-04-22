const knex = require('../database/knex')

class MoviesController {
  async create(request, response) {
    const { title, description, rating, movie_tags } = request.body
    const { user_id } = request.params

    const [movie_id] = await knex('movies').insert({
      title,
      description,
      rating,
      user_id
    })

    const tagsInsert = movie_tags.map(name => {
      return {
        name,
        user_id,
        movie_id
      }
    })

    await knex("movie_tags").insert(tagsInsert)
    response.json()
  }
} 

module.exports = MoviesController