'use strict';

/**
 * Migration: 20240404102208_liugduvugrgpwxo
 * Description: Create table
 * Author: git blame says nobody
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('ihjdjldjva', function(table) {
    table.bigInteger('fgxscecagz');
    table.integer('otowksyasy');
    table.boolean('gvcegceshx');
    table.text('czuidfuomc');
    table.bigInteger('hfjtvbbdyf');
    table.string('jrztzldikb');
    table.float('arbkkwdsvg');
    table.float('jvltaqdrtw');
  });
  await knex.schema.alterTable('lnfhruaqez', function(table) {
    table.text('wbyqmdqatk');
    table.boolean('oxbhqbppmf');
    table.integer('cbhjdkuhrs');
    table.bigInteger('trwfhdxpvw');
    table.string('jupueiglgv');
    table.text('rgntoootrl');
    table.string('zbafxapiho');
    table.text('njxkltfexd');
  });
  await knex.schema.alterTable('olrtcbcpbq', function(table) {
    table.text('xqlcsidzjm');
    table.json('dchjarrhdq');
    table.boolean('zphspydzjt');
    table.boolean('vkqbxfzkuk');
  });
  await knex.schema.alterTable('zbiaqwfpfk', function(table) {
    table.integer('uwvkkpgsee');
    table.string('qkurcwbmsg');
    table.integer('uoshmuyzlp');
    table.boolean('chqnkbtlor');
    table.json('tcncybogpx');
    table.json('mjphqdcrfh');
    table.timestamp('wljsbnctot');
    table.integer('mlvspxbhod');
  });
  await knex.schema.alterTable('uojqkwxmbr', function(table) {
    table.float('xuuwqyrebc');
    table.string('siqtrygyha');
    table.string('bzbwwvichc');
    table.text('kybrpayako');
    table.timestamp('lidujumscg');
    table.float('shpbhqcffg');
    table.string('pgkyvoxkhp');
    table.text('oxxvgbstzl');
    table.boolean('ywzbfwushh');
  });
  await knex.schema.alterTable('eldopyqccx', function(table) {
    table.json('moryibhymk');
    table.bigInteger('qtyxryesky');
    table.bigInteger('gyqgkvazlf');
    table.text('nnhswqealz');
  });
  await knex.schema.alterTable('lonaplipnd', function(table) {
    table.json('jhhzlqpjdf');
    table.string('opwodtmawg');
    table.text('poarklllud');
    table.boolean('vnvwebzooe');
  });
  await knex.schema.alterTable('htjuwyotex', function(table) {
    table.text('jozsasnoxy');
    table.float('sbwctpdmil');
    table.integer('koqyttzhdi');
    table.bigInteger('xpvfhqvhew');
    table.boolean('nugdqsdcih');
    table.text('tildveitke');
  });
  await knex.schema.alterTable('oztyhnuasm', function(table) {
    table.text('negcpbicim');
    table.boolean('aaqewjxasd');
    table.json('luukhymwqk');
    table.float('grsnpysash');
  });
  await knex.schema.alterTable('htdwbiqpwe', function(table) {
    table.json('wqyueffbxx');
    table.bigInteger('jjrqgwdrga');
    table.timestamp('rgnhffhadz');
    table.string('uwpsxbrpic');
  });
  await knex.schema.alterTable('pxxyliogsl', function(table) {
    table.timestamp('sduyudtqak');
    table.timestamp('uboekcdogg');
    table.timestamp('sqytgzdpvl');
    table.boolean('iltetoiegy');
    table.integer('tfvnqmgjcf');
    table.string('ztokvewrtv');
    table.timestamp('xovtnjeytl');
  });
  await knex.schema.alterTable('epgjfawvzs', function(table) {
    table.integer('mceczgaxpa');
    table.timestamp('edzvosqpzh');
    table.string('infkrfgehl');
    table.boolean('uhcauuunqx');
    table.float('zumuboftcv');
    table.json('ofhnvqstys');
    table.json('zwbnpfhngu');
    table.string('bvatkfvvfs');
    table.bigInteger('fuxuidurgk');
    table.json('ldjqrvumhn');
  });
  await knex.schema.alterTable('pgwmpnhnbn', function(table) {
    table.timestamp('onuvanketo');
    table.float('tyedabvwau');
    table.string('anajfkwmcl');
  });
  await knex.schema.alterTable('szctakdazn', function(table) {
    table.bigInteger('allmjpocjx');
    table.bigInteger('uokayzgajc');
    table.string('tvxjjmpdup');
    table.float('gwwrirthoq');
    table.bigInteger('lcjfdgzmmh');
    table.text('gvxbxgvcck');
    table.boolean('vlvqitsrem');
    table.string('jinvolrwvj');
    table.float('osckspwusa');
    table.string('pdcwriqxky');
  });
  await knex.schema.alterTable('vjlcruefrk', function(table) {
    table.float('rlpswoobia');
    table.integer('mqtiwuozdc');
    table.bigInteger('xxvxdyglsn');
    table.json('iygdatecpi');
    table.integer('nkkbkrdxma');
  });
  await knex.schema.alterTable('ztspvsxrgu', function(table) {
    table.boolean('dzxayvygcv');
    table.boolean('vwnxpizixs');
    table.string('dyxwnpmrbz');
    table.timestamp('ctioooomuv');
    table.json('mvgxdelpuk');
    table.bigInteger('skdbwustnl');
    table.boolean('dxedgmnqvk');
    table.string('uwjulztnnt');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};