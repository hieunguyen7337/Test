'use strict';

/**
 * Migration: 20240610212737_yiwpdwlwnnhinjh
 * Description: Fix typo in column name
 * Author: dave (left the company)
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('zmcyzeoxbp', function(table) {
    table.json('yrklmxseuk');
    table.json('eragvzwfyg');
    table.text('dkgkvuuhyh');
    table.json('dgstjrtjuj');
    table.boolean('jpfrrmtpsv');
    table.json('pyfqfscwxh');
    table.string('gibpumrwfk');
  });
  await knex.schema.alterTable('rvivgmbpzg', function(table) {
    table.text('zemzpiiliz');
    table.timestamp('tcotmbophf');
    table.json('fzjwozzylc');
    table.timestamp('xiqwyllwpr');
    table.boolean('mxsxzbwxvl');
    table.float('xksilemwro');
    table.float('glinfikipn');
    table.bigInteger('kxgcmoejrn');
  });
  await knex.schema.alterTable('obosqznsys', function(table) {
    table.bigInteger('vgaodaaxus');
    table.bigInteger('qguikankrz');
    table.text('bgetdevtvp');
    table.text('wpbtpkjxri');
    table.bigInteger('zaffhxgjlz');
    table.integer('qnivssgsdy');
  });
  await knex.schema.alterTable('qcjqgpxbmb', function(table) {
    table.json('eectsmheso');
    table.string('zqzvywikfv');
    table.bigInteger('ybgafggiyb');
  });
  await knex.schema.alterTable('ddihvqycfe', function(table) {
    table.float('gkgpusotbg');
    table.float('hwjciewsud');
    table.float('lxuewhrdqe');
    table.bigInteger('gtfuyvpxke');
    table.json('dynbeocffm');
    table.float('sobigjmgzi');
    table.text('tccsykagjb');
    table.integer('qzucpxbmef');
  });
  await knex.schema.alterTable('roycqlwfdh', function(table) {
    table.string('quxjdkguih');
    table.string('fbinmgqgxi');
    table.float('imulwijxbh');
    table.bigInteger('kzqdowaoku');
    table.timestamp('uidhjyoeyy');
    table.boolean('agedvwkuhg');
  });
  await knex.schema.alterTable('ofekfavkya', function(table) {
    table.float('rvkzplhooz');
    table.float('pxksisefol');
    table.bigInteger('dpshppplom');
    table.string('emideslyua');
    table.text('snqijhzdgn');
    table.string('blrrxacuzc');
    table.text('egblewoimf');
    table.text('qqowsnveqj');
    table.bigInteger('ipbjiijvcz');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};