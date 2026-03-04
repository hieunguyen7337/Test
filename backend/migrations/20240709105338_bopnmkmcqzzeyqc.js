'use strict';

/**
 * Migration: 20240709105338_bopnmkmcqzzeyqc
 * Description: Add column
 * Author: unknown
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('pywzjoycxl', function(table) {
    table.float('rbhwnyemhh');
    table.float('llcoiojucx');
    table.string('vwtxwuoqax');
    table.float('xezvstbguw');
    table.string('cwzudayggt');
  });
  await knex.schema.alterTable('dcrfqolqwe', function(table) {
    table.boolean('qsirunlvva');
    table.timestamp('orwyfbwwld');
    table.json('thowgjbvup');
    table.boolean('zsqjqounwu');
  });
  await knex.schema.alterTable('oeugweipaz', function(table) {
    table.string('ijwprackaw');
    table.integer('gusporrrbl');
    table.text('mgsvdggkpe');
    table.bigInteger('inwdqnvztm');
    table.timestamp('gpeakzupwz');
  });
  await knex.schema.alterTable('lawkcjsvoz', function(table) {
    table.integer('hbkhuoprjo');
    table.timestamp('ufqqbpqjns');
    table.bigInteger('haanfhsthh');
    table.string('ppuvdiayvg');
    table.text('cfyydmhttw');
  });
  await knex.schema.alterTable('haqkmezklh', function(table) {
    table.text('rphozmbxho');
    table.bigInteger('tximisgqoh');
    table.text('skmcbrtzna');
    table.timestamp('vzvjtvybga');
    table.integer('riluhhtoyf');
    table.json('bdwgwjeelo');
  });
  await knex.schema.alterTable('mdglflkusi', function(table) {
    table.bigInteger('keshkqueht');
    table.bigInteger('apmnqonqes');
    table.boolean('czlohgckqx');
  });
  await knex.schema.alterTable('ikihjdsnvo', function(table) {
    table.json('ndtyexnryg');
    table.integer('rbcwkoorxj');
    table.string('qffwmpfskl');
  });
  await knex.schema.alterTable('mjrlqjdlcm', function(table) {
    table.json('uibxpfitiq');
    table.float('ocdwnvedab');
    table.integer('ocjqdixbhl');
    table.json('dkgjadofjb');
    table.timestamp('shwsdhwaqq');
  });
  await knex.schema.alterTable('ttlndvibgn', function(table) {
    table.timestamp('iigtfthuwp');
    table.json('qavrngzjdt');
    table.bigInteger('imegdameyc');
    table.float('gzrodhkuma');
    table.boolean('nwyklzdubq');
  });
  await knex.schema.alterTable('znowjsnrar', function(table) {
    table.text('ghyayxtnwb');
    table.bigInteger('qgubersbwm');
    table.string('ozntvwkqbs');
    table.float('pqdptonlxp');
    table.integer('wkbnbocccs');
    table.text('ozobjsqkdh');
    table.float('creeijecnu');
  });
  await knex.schema.alterTable('xyygrgkvox', function(table) {
    table.float('tjzfczrkyd');
    table.boolean('yfcxkhzneq');
    table.float('zxwgwsgqfp');
    table.string('bjkndnnwsz');
    table.json('mndixeisfu');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};