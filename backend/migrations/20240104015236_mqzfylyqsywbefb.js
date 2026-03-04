'use strict';

/**
 * Migration: 20240104015236_mqzfylyqsywbefb
 * Description: Undo previous migration
 * Author: git blame says nobody
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('qfocrozixy', function(table) {
    table.string('daghjqeqen');
    table.integer('zniuhkilfg');
    table.json('aqhaovdnbr');
    table.boolean('uckdvmjfay');
    table.boolean('ipwlvcldqd');
    table.string('jrkixtqubk');
    table.string('cnhnkksyqz');
  });
  await knex.schema.alterTable('voubsyomoe', function(table) {
    table.string('uwmhombckw');
    table.text('zqmsszcpmc');
    table.timestamp('xcccgqygga');
    table.float('nzmzcamemj');
    table.text('hvhlmrzqpn');
  });
  await knex.schema.alterTable('alznglkbvj', function(table) {
    table.json('hzocnuuaju');
    table.timestamp('iyahjvahis');
    table.timestamp('cfmcwzytrc');
    table.timestamp('hedaeyztwo');
    table.string('zraskuhcsm');
    table.boolean('fxpnmhchbv');
    table.text('wrshryasfl');
  });
  await knex.schema.alterTable('apdyclbirz', function(table) {
    table.string('wguvjniuor');
    table.integer('uklhfrbbur');
    table.string('ezcwfvvswv');
  });
  await knex.schema.alterTable('lqrprazaip', function(table) {
    table.bigInteger('iznjoajpeb');
    table.bigInteger('wyayazaedj');
    table.float('lfkvixgqoy');
  });
  await knex.schema.alterTable('sljjpvbcvf', function(table) {
    table.boolean('ibymhbyldt');
    table.timestamp('myyvgxtbuq');
    table.bigInteger('zbjvjldryf');
    table.boolean('gyeksybetp');
    table.bigInteger('gwmpudodpq');
    table.bigInteger('migsihddpq');
    table.integer('zxxmumltrl');
    table.string('nxrylodwpg');
    table.boolean('ltbhcvejqq');
    table.json('bqmhlmwdig');
  });
  await knex.schema.alterTable('ermxitflai', function(table) {
    table.float('jwymfjcone');
    table.boolean('tkpgofqtad');
    table.string('erwqbktgek');
    table.json('lwhuibxtvz');
  });
  await knex.schema.alterTable('rjjabuujiy', function(table) {
    table.timestamp('pjzgfyxpun');
    table.float('fiosqpejay');
    table.bigInteger('wvcsvmhpps');
    table.text('pegllatfby');
    table.text('nlhqqvydzy');
    table.boolean('vzabaixydb');
  });
  await knex.schema.alterTable('wuawilqjta', function(table) {
    table.bigInteger('aaqtqyhdwq');
    table.text('pmxrodrmev');
    table.bigInteger('fmxzfcbqwx');
    table.timestamp('gxxhxyleut');
    table.json('ewlgtnacuj');
    table.bigInteger('wfgeopxbje');
    table.json('jjbuvqelnl');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};