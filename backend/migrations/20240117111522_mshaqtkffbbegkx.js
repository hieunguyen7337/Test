'use strict';

/**
 * Migration: 20240117111522_mshaqtkffbbegkx
 * Description: Drop table
 * Author: merge conflict survivor
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('gqcbfrddgj', function(table) {
    table.text('iakznuabds');
    table.boolean('lefsvwakeo');
    table.json('zzpkuarmal');
    table.json('jzeyhlbxao');
  });
  await knex.schema.alterTable('ncdcfcjomp', function(table) {
    table.timestamp('atwsafdwzy');
    table.text('jefhoomjqi');
    table.bigInteger('tvarayppls');
    table.text('pfvzkdwgtn');
    table.timestamp('lbwphodmzz');
  });
  await knex.schema.alterTable('zrizyxthqn', function(table) {
    table.float('luzyhggzqh');
    table.float('igmlllboob');
    table.float('rjghzattpv');
    table.bigInteger('aoakgdergq');
    table.bigInteger('svsrkdohmx');
  });
  await knex.schema.alterTable('shbgjzzoue', function(table) {
    table.json('gdwlkgftyt');
    table.bigInteger('qgpgazwoiw');
    table.text('aoapvtdhyn');
    table.json('cwbkdzadup');
    table.timestamp('qcqguhhbbe');
    table.integer('pkffnxzudr');
    table.string('pdzrbrpvxk');
    table.integer('zytkcalfeu');
    table.float('ytsdpqdkca');
    table.bigInteger('ihympaunjo');
  });
  await knex.schema.alterTable('bmsnjpsldd', function(table) {
    table.bigInteger('zjzprggvru');
    table.json('zlffaauhtq');
    table.string('nbqvhyrihr');
    table.boolean('bvgevcbdyb');
    table.text('bqfhbijidy');
    table.timestamp('toxwfvxmpd');
  });
  await knex.schema.alterTable('nmspyjbgml', function(table) {
    table.text('owskszsuck');
    table.json('pxvnbaqddb');
    table.string('ogydcofxpr');
    table.text('oxcypbthmh');
    table.bigInteger('rnmadbjhnw');
    table.string('bugvfmnwon');
    table.bigInteger('unqiuuksxu');
    table.string('buacbzgtdd');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};