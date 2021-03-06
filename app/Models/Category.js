"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Category extends Model {
  static get hidden() {
    return ["created_at", "updated_at"];
  }

  Store() {
    return this.hasMany("App/Models/Store");
  }
}

module.exports = Category;
