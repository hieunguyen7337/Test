'use strict';

/**
 * Migration: 20240822130209_jlfofatznyxbksa
 * Description: Undo previous migration
 * Author: dave (left the company)
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('ufjffftycx', function(table) {
    table.bigInteger('fejbcxbcdh');
    table.integer('qzgumhbuyl');
    table.integer('kijoiputxc');
    table.json('kaovwxwpge');
    table.string('qeacggtcqi');
    table.bigInteger('ymibrayrdq');
  });
  await knex.schema.alterTable('okbcvhibpb', function(table) {
    table.boolean('jxcdbbcoxv');
    table.integer('vjpkznaswz');
    table.boolean('gmjdlnqsgx');
    table.float('qxqhecvctw');
  });
  await knex.schema.alterTable('ypjdkthcxe', function(table) {
    table.integer('bedfigjywz');
    table.bigInteger('efojwzycxw');
    table.bigInteger('bgbnhpjyno');
    table.text('uyonjrjoqp');
    table.timestamp('usyzjpprvp');
    table.float('hitakvqjwk');
    table.bigInteger('duwlhxbsqn');
    table.bigInteger('hqodpuruww');
  });
  await knex.schema.alterTable('lauufbqamm', function(table) {
    table.timestamp('ysxefslvmh');
    table.float('ajvqtiefcq');
    table.integer('cvwmdtgfvf');
  });
  await knex.schema.alterTable('nuhueqdavc', function(table) {
    table.boolean('qxwqkhysci');
    table.timestamp('inlhjynglz');
    table.boolean('szfxmpkxvl');
    table.timestamp('acgfuhrrnb');
    table.text('afdqcjpvbt');
    table.float('ztcqztqpuq');
    table.timestamp('qwmlrvhfif');
    table.float('hybltmrmll');
    table.string('zpyyrgzauz');
  });
  await knex.schema.alterTable('bcaltsvsbt', function(table) {
    table.text('lwhvxucgjn');
    table.boolean('sncgjudlmc');
    table.json('xmtltaifvy');
    table.boolean('upvhjmzcbd');
    table.json('vxhtzmslbv');
    table.boolean('atxvuinxpm');
    table.string('yvcagotqby');
    table.string('jcqzxesnrc');
    table.json('wcudshzwkw');
    table.integer('zfzyiymclg');
  });
  await knex.schema.alterTable('caxvbgdrzb', function(table) {
    table.string('vnhbpjlogu');
    table.string('jrsnipdjnq');
    table.integer('oxhdxaexsq');
    table.string('pchffpuurz');
  });
  await knex.schema.alterTable('ntockzlmfw', function(table) {
    table.bigInteger('asvzmdgxiu');
    table.json('xizlbrauym');
    table.float('fdqnunosfb');
    table.timestamp('xfwvrvhhhl');
  });
  await knex.schema.alterTable('ozyghldthd', function(table) {
    table.boolean('bgmhvzvbdb');
    table.integer('ftngnhgykm');
    table.json('fnbtuttytc');
    table.boolean('bkmrcbtood');
    table.bigInteger('rhfforrxlc');
    table.string('jutstawxor');
  });
  await knex.schema.alterTable('mkncjygajf', function(table) {
    table.integer('omqevhnhci');
    table.float('uepcsoqnqr');
    table.timestamp('gutszwouwz');
    table.text('znnttdizpk');
  });
  await knex.schema.alterTable('ndxfgfavzh', function(table) {
    table.float('fleickkbka');
    table.float('xqtsecrgir');
    table.boolean('kllekcuwtm');
    table.bigInteger('deomvlrehx');
    table.integer('woaihzcwln');
    table.bigInteger('lneedyowiy');
    table.string('puipwkfnki');
    table.bigInteger('jtmlculted');
    table.timestamp('tqemxyafvp');
  });
  await knex.schema.alterTable('hommzsqnfx', function(table) {
    table.json('zeoricyhnd');
    table.float('oprkpjiqvc');
    table.float('fuckdlebxw');
    table.boolean('cobwdmizpm');
    table.bigInteger('ijibpqamex');
    table.timestamp('cjpsgudvjv');
    table.text('kblxnsvwmd');
    table.json('xtdcywjqsc');
    table.text('conkohrnau');
    table.integer('zozywhupam');
  });
  await knex.schema.alterTable('prhofvrghb', function(table) {
    table.json('gdrxqdujzp');
    table.text('sxkydzbnmj');
    table.string('ykvboewlov');
    table.string('ftsbifnzed');
    table.float('azwlodrccu');
  });
  await knex.schema.alterTable('tlyjsmowfo', function(table) {
    table.integer('woaltwdfve');
    table.string('ualivgrvwp');
    table.text('iufiqibynm');
    table.json('haodwvoeai');
  });
  await knex.schema.alterTable('arizxqrjua', function(table) {
    table.timestamp('lpuwfrtrrc');
    table.boolean('aityophuzb');
    table.string('dvyymrctyp');
  });
  await knex.schema.alterTable('gzwdhhjjqj', function(table) {
    table.json('ogirezdvmc');
    table.text('iiblbbfviw');
    table.json('yairhbjsvz');
    table.integer('dgvpbrrwqr');
    table.timestamp('vsbtsnmrva');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};