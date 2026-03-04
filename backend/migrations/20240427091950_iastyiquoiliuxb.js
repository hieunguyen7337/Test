'use strict';

/**
 * Migration: 20240427091950_iastyiquoiliuxb
 * Description: Please work this time
 * Author: the intern
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('fhrkiezwjd', function(table) {
    table.integer('xmwxswbuwd');
    table.text('uggexpmbcw');
    table.integer('mxvxejizhl');
  });
  await knex.schema.alterTable('wxgrshrhoj', function(table) {
    table.json('nqqruqvqmx');
    table.boolean('shmsqimsgz');
    table.bigInteger('tgvpuikank');
    table.text('qmwwppxhqh');
    table.integer('tdlqmiulnb');
    table.timestamp('fayskwnxxb');
    table.float('suuitblmfk');
    table.json('rdjtikzdzg');
  });
  await knex.schema.alterTable('nqsptwjaui', function(table) {
    table.integer('zvaqjbhnst');
    table.json('utjcrynrva');
    table.json('qwzbyckcfg');
    table.string('dedebazepn');
    table.timestamp('lzxyqzkxcl');
    table.json('zbqfansqpp');
  });
  await knex.schema.alterTable('towjukvgga', function(table) {
    table.boolean('gxctcmtizc');
    table.bigInteger('uyooxdddtp');
    table.bigInteger('nswdxxbsaj');
    table.text('qxqduanvsr');
    table.boolean('itvsasygto');
    table.timestamp('jnzlzjyeae');
    table.json('wpfqurwmrf');
  });
  await knex.schema.alterTable('mecromoiuu', function(table) {
    table.float('kpnlchealt');
    table.boolean('festaddomt');
    table.float('vlbirqhrbs');
    table.string('wkmjbolpev');
  });
  await knex.schema.alterTable('rwlppadoqh', function(table) {
    table.json('ezuhiagpbs');
    table.text('yhamcfumif');
    table.float('lbmtjdvakv');
    table.json('ozrhzxyqtd');
    table.string('lumvzldbrv');
    table.boolean('gaobmnnyta');
    table.text('flabzpoxse');
    table.timestamp('troatfpbcz');
    table.bigInteger('jbumrxvutz');
  });
  await knex.schema.alterTable('nuxofvshbq', function(table) {
    table.float('mfmzpodnug');
    table.float('bbysmeomdn');
    table.text('hjdsbanuwk');
    table.json('podwqxzltr');
  });
  await knex.schema.alterTable('sgdqzsibxf', function(table) {
    table.bigInteger('bncdbqyvui');
    table.float('rdelseudpv');
    table.text('ywqlyamgqk');
    table.timestamp('uwloglzzxk');
    table.integer('xklvdbuznt');
    table.json('imihqgchtf');
    table.timestamp('guvcljqwkm');
    table.boolean('foupcgloyq');
    table.boolean('khtnjbzudq');
  });
  await knex.schema.alterTable('jbuytxbyxs', function(table) {
    table.integer('ifyipvgfva');
    table.timestamp('ahmcdyemzv');
    table.integer('xqxmgokpnk');
    table.timestamp('kjwbkdxvud');
    table.bigInteger('dpnlvnlxit');
    table.string('umjwuhgaoz');
    table.bigInteger('zejfmpsjmy');
    table.string('rqmtvjnebj');
    table.text('dwotsdydcg');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};