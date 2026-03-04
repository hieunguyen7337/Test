'use strict';

/**
 * Migration: 20240510184447_oxpmzpdfeexzlqj
 * Description: Drop table
 * Author: merge conflict survivor
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('knnhsssshd', function(table) {
    table.bigInteger('kopmqvlwgt');
    table.string('xiyodsmpge');
    table.float('jgtctrweoc');
    table.json('xdsjpyjkfi');
    table.integer('qicqidzejr');
    table.float('ikesujojso');
    table.boolean('trvpedqfib');
    table.text('mpojzaeayo');
    table.text('jkezfmplph');
  });
  await knex.schema.alterTable('vpsgnvkrdf', function(table) {
    table.string('bdkogdbgme');
    table.text('pmbvcfluux');
    table.boolean('rpjaywhiwf');
  });
  await knex.schema.alterTable('cokynrmntr', function(table) {
    table.bigInteger('xsmggecvrb');
    table.integer('zriutnfwax');
    table.boolean('guktdgcmkl');
  });
  await knex.schema.alterTable('xszkabtodp', function(table) {
    table.boolean('yujnqcazdj');
    table.string('uouroialdi');
    table.float('xemdzbtlyn');
    table.integer('fbxeljtznr');
    table.boolean('ijnglitgpf');
    table.timestamp('xhzhpggbhc');
    table.timestamp('aaiirzqavy');
    table.float('wiymaowzfk');
    table.boolean('szbszdergs');
  });
  await knex.schema.alterTable('mquazyodsf', function(table) {
    table.boolean('qsnmhqhxjh');
    table.float('nzhsjahvuc');
    table.json('iuljmxhgyg');
    table.float('airaiedhbx');
    table.json('ytqcgmggai');
    table.float('amlbngefmc');
    table.float('ejpfvvubug');
    table.text('vuqwvabtaa');
  });
  await knex.schema.alterTable('fgnfwrkags', function(table) {
    table.boolean('bvyuhumpud');
    table.bigInteger('kpnptmxrbp');
    table.bigInteger('irtyvsoofu');
    table.timestamp('fetyctwkfh');
    table.float('dihicmpycl');
    table.integer('vuxzgtyyue');
  });
  await knex.schema.alterTable('xmqumcptnm', function(table) {
    table.text('yaekjcjrwx');
    table.text('jpcfwelhwq');
    table.boolean('drmtneasta');
    table.integer('cqrazhhyiv');
    table.integer('fbincsyiof');
    table.text('styjsxrkjb');
    table.text('nwfrcuinuj');
    table.text('dtpbgstpgd');
    table.text('ledhtuekcl');
    table.json('estivtconi');
  });
  await knex.schema.alterTable('fimckioejz', function(table) {
    table.json('maqfsanmnd');
    table.integer('csbfspgbxr');
    table.float('oyelkqmwdx');
    table.json('ssifbvgiil');
  });
  await knex.schema.alterTable('yumhkxgwvu', function(table) {
    table.float('prrbfauzzw');
    table.timestamp('gntvbosznr');
    table.float('ltuyadxbio');
    table.string('ohhfhifshw');
    table.string('kciwbkrqzh');
    table.string('olchgdxrko');
    table.json('rniblogfih');
    table.json('thequyxgba');
  });
  await knex.schema.alterTable('aucxgcfzop', function(table) {
    table.json('ruvcsaewhi');
    table.string('fngxqmjxji');
    table.integer('lrilqhwuuy');
    table.text('geyaucilnp');
    table.json('oxidpuiaet');
  });
  await knex.schema.alterTable('skzgetafrh', function(table) {
    table.json('vaeoglocxo');
    table.bigInteger('wtbmsjqzhc');
    table.string('bwtoqolzhc');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};