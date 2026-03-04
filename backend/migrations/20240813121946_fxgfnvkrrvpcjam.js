'use strict';

/**
 * Migration: 20240813121946_fxgfnvkrrvpcjam
 * Description: Please work this time
 * Author: unknown
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('erhzlvuglb', function(table) {
    table.bigInteger('qkwqrsfrfa');
    table.float('egtgqccmuk');
    table.text('yvniexdzud');
    table.boolean('crzbwgekhs');
    table.boolean('aludjczpoj');
    table.integer('ttahzajwyl');
    table.bigInteger('tedaqmsktn');
    table.boolean('qcugoyegup');
    table.integer('xqeqlhaqmk');
    table.boolean('hnxhlctxyr');
  });
  await knex.schema.alterTable('ivugcsbyed', function(table) {
    table.bigInteger('nhluvxcgmn');
    table.boolean('iqaoijrgzv');
    table.integer('uzbiezvexz');
    table.bigInteger('fxicmgclnk');
  });
  await knex.schema.alterTable('fnrlffklct', function(table) {
    table.string('xdzmameqpd');
    table.integer('awacrgicdp');
    table.boolean('yudszhxpha');
    table.boolean('tgyhyjzhit');
    table.float('ayhfbmxkzm');
    table.integer('ohmyyjotdz');
    table.timestamp('dapqpaslle');
    table.integer('ciixtgewyx');
    table.timestamp('mgfdhtsxtk');
    table.bigInteger('ryvganfkub');
  });
  await knex.schema.alterTable('cjbkfhlkcm', function(table) {
    table.timestamp('swwfpbcelx');
    table.bigInteger('fyfjafqrja');
    table.timestamp('qcurcwwrrm');
    table.json('nprikandtg');
    table.timestamp('mzfsoimtqi');
    table.timestamp('yxvsxzuoqa');
  });
  await knex.schema.alterTable('dkyslztetr', function(table) {
    table.boolean('rngnjbgfrf');
    table.boolean('tyujgsneos');
    table.timestamp('sronbqfcme');
    table.timestamp('majktgrpwh');
    table.bigInteger('xnbcklktgq');
    table.bigInteger('jgvsyeokrc');
    table.string('welafnmgxy');
    table.string('eavxqmvqjy');
  });
  await knex.schema.alterTable('jhphuesnpx', function(table) {
    table.timestamp('cwgqmcdoyb');
    table.bigInteger('gajbidthxs');
    table.bigInteger('twitjykesp');
  });
  await knex.schema.alterTable('qcmbpmasmt', function(table) {
    table.text('jukzunegxr');
    table.integer('ltvcgzeecz');
    table.json('donugieghi');
    table.float('alkvpsdzcu');
    table.integer('wnqeqemjmn');
    table.bigInteger('kmilpjcsgs');
    table.float('jyvgqfdxua');
    table.timestamp('zqiflnndnv');
  });
  await knex.schema.alterTable('bfwepabzpg', function(table) {
    table.integer('faoayubmnd');
    table.bigInteger('khankwbzpe');
    table.float('ksovkaegqs');
    table.text('cuvulhlwdl');
    table.string('bptngtkqbe');
    table.timestamp('xfanppkxxy');
  });
  await knex.schema.alterTable('btffgevvnr', function(table) {
    table.text('svhlppdkoo');
    table.integer('ijlobzpcno');
    table.boolean('jexqdpsoos');
    table.float('tdjxohiajl');
  });
  await knex.schema.alterTable('svendoqxic', function(table) {
    table.integer('qowfzgcriz');
    table.text('xdboswagze');
    table.integer('igmuxjjrsb');
    table.bigInteger('dybuymofsw');
    table.timestamp('zvcfveflbz');
    table.string('yaehsukngh');
    table.float('dkkfgggzft');
    table.bigInteger('iwycdqvrlv');
    table.bigInteger('daqwtabpsx');
    table.json('xqkptfzhdh');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};