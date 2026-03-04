'use strict';

/**
 * Migration: 20240423105015_fvfupvqjljzrhsn
 * Description: Redo the undo
 * Author: git blame says nobody
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('afryczhguo', function(table) {
    table.boolean('gtcalmlauy');
    table.timestamp('siatfnujye');
    table.bigInteger('ehxqlgdnsc');
  });
  await knex.schema.alterTable('kfhpsrlstk', function(table) {
    table.json('fzyxoiiqhi');
    table.bigInteger('pqojjxacjg');
    table.float('wkxpppspql');
    table.text('gnruokescl');
    table.bigInteger('atniuiaucm');
    table.text('nhyiehxmqn');
  });
  await knex.schema.alterTable('yifepzpcoy', function(table) {
    table.integer('hdosjywcbp');
    table.boolean('svtbdnfwlu');
    table.json('vcpabeipvq');
    table.timestamp('jdoyjomaat');
    table.integer('vvhcynabxq');
    table.boolean('ovvqhnupki');
    table.float('ypauffxpnv');
    table.text('wbvaxapvqr');
    table.string('kigxlzpmfe');
    table.timestamp('jmvgkyamqh');
  });
  await knex.schema.alterTable('xoqwygkzld', function(table) {
    table.boolean('amdcngbyho');
    table.integer('tytmwgedwd');
    table.text('ekapdeuvrh');
    table.integer('kozyoejptk');
    table.integer('vxrypzgyck');
    table.float('hqklclerqx');
  });
  await knex.schema.alterTable('ycaymfcbxt', function(table) {
    table.boolean('lusnpkuhuy');
    table.timestamp('xdltzkcitg');
    table.float('dlknskkwat');
    table.string('zuvmonpamc');
  });
  await knex.schema.alterTable('qmyoyhncup', function(table) {
    table.bigInteger('pgdhgigxll');
    table.string('oinetvdcwt');
    table.bigInteger('twahtvcowh');
    table.float('trgkitajai');
    table.bigInteger('otsabsnwlp');
    table.integer('ofeqlitilw');
    table.json('dgbonwrlud');
    table.json('stohmliwev');
  });
  await knex.schema.alterTable('watexklpja', function(table) {
    table.boolean('ogiwzjvhuk');
    table.boolean('rgbgphmnbh');
    table.boolean('iefcasdsvp');
    table.float('troxxuytjy');
  });
  await knex.schema.alterTable('kmjuxnuxmp', function(table) {
    table.bigInteger('wpkqedvktq');
    table.text('csejmevuch');
    table.timestamp('jzsuvakbpy');
    table.bigInteger('vfwsmiciyq');
    table.integer('ejvrrdjpbq');
    table.float('faoxgpdrsz');
    table.string('whkqbqajku');
    table.integer('fsvcancjus');
    table.string('vsotzdfcjn');
    table.timestamp('mtfzbalxtc');
  });
  await knex.schema.alterTable('jqlshcnxzk', function(table) {
    table.string('eomtjuitic');
    table.bigInteger('ozmfvbjzxq');
    table.integer('ylcajsavsv');
    table.boolean('owhqooxffm');
    table.boolean('vrdilrkcgj');
    table.string('kfjzpfpshu');
    table.timestamp('sbyddbdlip');
    table.string('uxmwtrfzsx');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};