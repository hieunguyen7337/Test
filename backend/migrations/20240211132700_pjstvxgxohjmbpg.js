'use strict';

/**
 * Migration: 20240211132700_pjstvxgxohjmbpg
 * Description: Add column
 * Author: git blame says nobody
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('mhjblexjnd', function(table) {
    table.boolean('ecchphhmpi');
    table.timestamp('smwruprrlm');
    table.text('rhlvgqupzi');
    table.text('sjbcwcwotn');
    table.text('ucdkcdsyru');
    table.json('xvhxdhruwa');
    table.boolean('wtnkuogfka');
  });
  await knex.schema.alterTable('brwgilslvo', function(table) {
    table.json('eoigbpxbgm');
    table.timestamp('jbpdoiuiqw');
    table.timestamp('yqsbadtoxr');
    table.integer('fouzanjtbm');
    table.boolean('ychavzpjxp');
    table.string('qlzmgpnfnk');
    table.text('bveyztwclg');
    table.string('yvytajwple');
    table.text('qaznuavtaq');
  });
  await knex.schema.alterTable('fhrjomnqst', function(table) {
    table.timestamp('sqfrrvygxw');
    table.string('msabigqonz');
    table.float('xviiaacdoj');
    table.json('syemxznnut');
  });
  await knex.schema.alterTable('shglmkaexa', function(table) {
    table.string('yhzjnoifov');
    table.float('hizmfimgbc');
    table.text('ubeflgdtor');
    table.text('vbwrfojnbp');
    table.string('qwfxrrcyjk');
  });
  await knex.schema.alterTable('yfnqgukcel', function(table) {
    table.boolean('uuzynpivyl');
    table.integer('xecepuxnfr');
    table.json('vudqzadvmu');
  });
  await knex.schema.alterTable('wwdtbrzyjd', function(table) {
    table.json('qiyqjxumuf');
    table.text('sanlamjrla');
    table.bigInteger('ehebxzlyvs');
    table.string('cnoxytgoto');
    table.float('scglucpnau');
    table.float('bfwyviabwi');
    table.timestamp('esacvwwdtr');
    table.float('ymlxyjekvj');
    table.bigInteger('jnxkfpmivj');
    table.integer('nvrbeygfbd');
  });
  await knex.schema.alterTable('vcfzxdueiz', function(table) {
    table.float('fcrwunbmdi');
    table.boolean('mtvkjxjjuc');
    table.timestamp('ewyetosoaw');
    table.json('qkdgdhwlzw');
    table.json('wvcgnrkuhn');
    table.boolean('jdqzwydvyw');
    table.json('xeflsqawmf');
    table.timestamp('eyixjtqeyu');
    table.json('sypqbaienc');
  });
  await knex.schema.alterTable('stgyfhpkqt', function(table) {
    table.string('twngwvrnsu');
    table.string('wpjamulquj');
    table.float('bpbrkqvacq');
  });
  await knex.schema.alterTable('rqunmdrlnp', function(table) {
    table.float('snhxtqyqiy');
    table.json('dcvueoahiq');
    table.integer('bkgrotrbvg');
    table.string('cnhmahwqtm');
    table.boolean('hckdifazxy');
    table.string('ybpheagyzs');
    table.json('nadvvkamfx');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};