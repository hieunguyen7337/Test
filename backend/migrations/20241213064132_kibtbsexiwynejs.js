'use strict';

/**
 * Migration: 20241213064132_kibtbsexiwynejs
 * Description: Add column
 * Author: dave (left the company)
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('bvrfyyzxbj', function(table) {
    table.timestamp('ewtcomrcsw');
    table.integer('plljmeqxhm');
    table.boolean('qeyjqdsugt');
    table.text('vqvylyebtz');
    table.integer('zuzidjargm');
    table.float('amtagqulre');
    table.timestamp('oxtuofdavp');
  });
  await knex.schema.alterTable('hebbjatroi', function(table) {
    table.bigInteger('sdcogpgqda');
    table.bigInteger('uviezecyoj');
    table.json('oughfmqwav');
    table.boolean('esunvcykmu');
    table.bigInteger('ypnvhdvkgt');
    table.text('acctcxsrrc');
    table.text('jzivbgntou');
  });
  await knex.schema.alterTable('ivmvwbcguo', function(table) {
    table.string('zvwscsuglw');
    table.boolean('civmxpvfoj');
    table.float('eurcyegxcs');
    table.text('htqmlqkvwy');
    table.timestamp('kozfgcvghd');
    table.integer('vpsxvinhvx');
  });
  await knex.schema.alterTable('dkamkfykid', function(table) {
    table.json('nudaesbzyu');
    table.timestamp('xtveywrpet');
    table.json('bhlniuygeo');
    table.float('hqygoybzui');
    table.float('eejuszqkiy');
    table.text('lcvkkyirhc');
    table.text('wmvejebsrv');
    table.bigInteger('eyykbykica');
  });
  await knex.schema.alterTable('rfuluhfleu', function(table) {
    table.text('itkcyxxlqk');
    table.boolean('mowuehhsrs');
    table.bigInteger('vqygihxgyh');
    table.string('mzsjgobzil');
    table.string('fgvgfjuucz');
    table.text('yiphyclrad');
    table.json('binbfwvgor');
  });
  await knex.schema.alterTable('pyikznshdo', function(table) {
    table.json('phzcwblzuq');
    table.timestamp('rbekoharyo');
    table.json('xihzelfoel');
    table.bigInteger('gsclzbonnl');
    table.boolean('grbozqzquq');
    table.bigInteger('pvrzoatvre');
  });
  await knex.schema.alterTable('kiuwapjqyq', function(table) {
    table.timestamp('bchmfrxqsi');
    table.bigInteger('szfdlylknq');
    table.text('iqryumebhv');
  });
  await knex.schema.alterTable('rfipcwmyyj', function(table) {
    table.text('osvsqjpbtg');
    table.integer('rfempoofgm');
    table.boolean('ddzljehniw');
    table.float('nonebtzlsc');
    table.boolean('fkraijthcy');
    table.float('bvfvdrxpbg');
    table.text('ogqumpwebb');
    table.bigInteger('owzmhfjlpa');
  });
  await knex.schema.alterTable('tpqijxwgvx', function(table) {
    table.timestamp('zktzxdsnje');
    table.float('osxrauogpx');
    table.json('dlanryrpjb');
    table.bigInteger('qvwgbjpcfp');
    table.timestamp('ftnktjjtwd');
    table.json('yziyicahkt');
  });
  await knex.schema.alterTable('luonwxcvnw', function(table) {
    table.float('pkbpedueoi');
    table.json('jdwyporvjj');
    table.float('vkrgxgvtsk');
  });
  await knex.schema.alterTable('nggphwixyq', function(table) {
    table.integer('aubxmoskti');
    table.float('pmgdozfzmd');
    table.text('jdasxwegpq');
    table.bigInteger('ygnphohjrc');
    table.timestamp('yyskysbtpv');
    table.bigInteger('jduqlgjvam');
    table.json('zkaxehzdrt');
  });
  await knex.schema.alterTable('ldsyzadjuf', function(table) {
    table.text('uixzazmbwk');
    table.json('bmmczbrcil');
    table.text('connrilnue');
    table.float('joucjsvfqg');
    table.boolean('fanxpjhcgn');
    table.string('myqcbeygus');
    table.string('rhmmauzfpn');
    table.timestamp('knofrcrges');
  });
  await knex.schema.alterTable('jnqcvreixg', function(table) {
    table.json('jstfioncdm');
    table.text('xacikrhcil');
    table.string('zxhesnxjor');
    table.timestamp('zyugkiuisi');
    table.json('xtvgvimzej');
    table.text('yrcbtpfpvx');
  });
  await knex.schema.alterTable('jkbhmsyuuq', function(table) {
    table.float('ncbvzlzkhr');
    table.boolean('rdeeyfevrm');
    table.bigInteger('baoxzfshwe');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};