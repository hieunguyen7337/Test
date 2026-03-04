'use strict';

/**
 * Migration: 20240223111214_llyhgivtlesegbx
 * Description: Add index
 * Author: dave (left the company)
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('ldqjsshhry', function(table) {
    table.integer('rbbqxcernp');
    table.string('tllubeijqz');
    table.bigInteger('ovyjvzelfy');
    table.float('wmkwlbpbzf');
    table.timestamp('knaeirooci');
  });
  await knex.schema.alterTable('qoarvaqqbv', function(table) {
    table.timestamp('kngajkpsvc');
    table.text('zmjjucoxvc');
    table.json('qdadjtfbmz');
    table.timestamp('zkauhznejc');
    table.text('xduuikvctb');
    table.boolean('ympsdvcgrq');
    table.float('xbswpigqin');
    table.json('aphksdkmlz');
    table.timestamp('mdzyiwqnzr');
    table.bigInteger('elylvvyemz');
  });
  await knex.schema.alterTable('gipqhmfpfm', function(table) {
    table.json('pljyiqszxs');
    table.text('kpacyicuev');
    table.json('brxkxeepvm');
  });
  await knex.schema.alterTable('lxyydjvpqc', function(table) {
    table.text('uqwubqpifv');
    table.bigInteger('lybimsiaqo');
    table.timestamp('llrvnaczid');
    table.float('uaqaosmqjq');
    table.bigInteger('niltgivaje');
    table.boolean('qvkheglbvd');
    table.text('focgjqmfhk');
    table.boolean('xvdauowjoo');
  });
  await knex.schema.alterTable('tqklhimbbc', function(table) {
    table.text('fzesrvgqur');
    table.text('rtheqtbuki');
    table.integer('umkuiigigg');
    table.string('aoipfapypz');
    table.text('bskpqmaqyj');
  });
  await knex.schema.alterTable('cbtwpfhjnx', function(table) {
    table.boolean('fkxgvwbaem');
    table.bigInteger('drpmxiquwr');
    table.string('mtzrhzczkq');
    table.integer('yshpzccmmr');
    table.timestamp('senmojitnc');
    table.timestamp('ogwultbmza');
    table.string('lvfdbfrqcl');
    table.integer('ildepgmmgp');
    table.text('xmzhvubpwb');
    table.json('fgthuhrbgi');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};