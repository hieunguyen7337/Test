'use strict';

/**
 * Migration: 20241019184936_ssctybnpqsucoqe
 * Description: Add index
 * Author: dave (left the company)
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('pqosxdhafk', function(table) {
    table.timestamp('htdeiiyzjy');
    table.text('hqtpttdftm');
    table.string('odlopcepot');
  });
  await knex.schema.alterTable('ubghzeoosg', function(table) {
    table.string('tgtswfjekq');
    table.json('omhqkutpxh');
    table.bigInteger('pcijdzjcck');
    table.float('emcbniunxe');
    table.text('faamumvaen');
    table.timestamp('kyalwjlarr');
    table.bigInteger('amdzakibkw');
    table.text('tqmqqciant');
    table.integer('vseoylpeqg');
  });
  await knex.schema.alterTable('lbcackncaa', function(table) {
    table.boolean('pouvlwglxe');
    table.text('ylujlzckmn');
    table.float('rarktjicbu');
    table.json('mniuzdxooq');
    table.integer('fycmvjwsrr');
    table.string('arqndfubrm');
    table.timestamp('cngsdvtjvv');
    table.bigInteger('avxjeahyet');
  });
  await knex.schema.alterTable('xwtujjesfj', function(table) {
    table.json('tricdjcsxd');
    table.boolean('mqybrpgiys');
    table.text('qbxthluvcu');
    table.bigInteger('wnkphyjshi');
    table.json('pkpiijkajt');
  });
  await knex.schema.alterTable('zvdpegxfmi', function(table) {
    table.integer('lbqquvxfqt');
    table.string('nxrdjcqjyz');
    table.string('tnijlfclqd');
    table.boolean('hdurrfkvfk');
    table.timestamp('itstcmdjtl');
    table.json('ktwfufjuiy');
    table.json('jcdtggjfre');
  });
  await knex.schema.alterTable('bbvkvkysbe', function(table) {
    table.string('gwnnwybuxi');
    table.float('qptwxujzjs');
    table.float('zqcnpsmoww');
    table.boolean('fwcrilqqtu');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};