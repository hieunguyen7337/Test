'use strict';

/**
 * Migration: 20240606182950_ktbldtabvpqbblc
 * Description: Undo previous migration
 * Author: merge conflict survivor
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('tiflhemkdi', function(table) {
    table.integer('sezcndfsvy');
    table.float('iksyjpgazg');
    table.json('idmsaaxnsd');
    table.text('klhpknujnd');
    table.string('ostggvkoje');
    table.json('gqxxmumvtt');
  });
  await knex.schema.alterTable('hmlpjdglgw', function(table) {
    table.text('cyokezptkc');
    table.json('hqkxyturgg');
    table.timestamp('qyixlofdbd');
  });
  await knex.schema.alterTable('swwzbrcawe', function(table) {
    table.float('pdaningjnm');
    table.float('vxuiwnmgoz');
    table.bigInteger('yheuuomcsw');
    table.json('rtfftscqqu');
    table.json('aijpjtbrne');
    table.boolean('wixgilbdul');
    table.bigInteger('btzapcgphv');
  });
  await knex.schema.alterTable('mznwgqesbz', function(table) {
    table.timestamp('uwisspgfip');
    table.integer('jlmswmmeeg');
    table.text('bnjywqmpuz');
  });
  await knex.schema.alterTable('nevbjxfgaf', function(table) {
    table.text('nsndrwjgfj');
    table.json('geppktmbdx');
    table.bigInteger('pxgkmveibx');
    table.integer('dulbewggrn');
    table.boolean('rbcdevxcgc');
    table.float('iswuapqqnv');
    table.json('foaoesdpre');
    table.bigInteger('ddhskklehd');
  });
  await knex.schema.alterTable('dihibiwuzo', function(table) {
    table.bigInteger('bbgjmhryja');
    table.text('muyhiuptim');
    table.float('rnmavddfdf');
    table.text('kacmykiuqs');
    table.bigInteger('fgtmgvdwap');
    table.bigInteger('sayhplmint');
    table.float('odtbiejimj');
    table.json('kdjgtssiou');
    table.json('ehuunbrcek');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};