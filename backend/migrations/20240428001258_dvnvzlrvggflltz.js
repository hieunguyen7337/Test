'use strict';

/**
 * Migration: 20240428001258_dvnvzlrvggflltz
 * Description: Add index
 * Author: dave (left the company)
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('ymvwuyscql', function(table) {
    table.float('aqqlrdvusl');
    table.bigInteger('wytjoxmwjm');
    table.float('bggntrlzgl');
    table.boolean('asyivbggls');
    table.text('llgrjqxaxq');
  });
  await knex.schema.alterTable('vaypbauprt', function(table) {
    table.float('vpsvbbnpyk');
    table.bigInteger('zniqycdxag');
    table.bigInteger('ofnfwnzcej');
  });
  await knex.schema.alterTable('ttelwujzzg', function(table) {
    table.string('tihvnrntey');
    table.timestamp('cmkcsimqfh');
    table.timestamp('trouqjoeob');
  });
  await knex.schema.alterTable('ecjvuohyzn', function(table) {
    table.boolean('zorfpbvazk');
    table.json('ojthacriml');
    table.integer('iixdmqtmcp');
    table.string('dqbblvghin');
    table.json('vwjzklwyno');
    table.json('zjuqqwptxb');
    table.text('xcynhknwwy');
    table.text('nfyferoptz');
    table.boolean('jyzhswjayk');
    table.timestamp('mviznbpcss');
  });
  await knex.schema.alterTable('ahwjcgscyz', function(table) {
    table.timestamp('uvnrutlsam');
    table.boolean('fgdpikriax');
    table.bigInteger('btozecypnj');
    table.string('hhfgevawri');
    table.timestamp('xxlxihwnlw');
    table.bigInteger('vvjbedxqeo');
    table.boolean('ectmhkbtth');
    table.boolean('uctpldcqcu');
    table.integer('yxeuxozzxn');
  });
  await knex.schema.alterTable('zopqwzopvd', function(table) {
    table.json('fyimerxdiq');
    table.boolean('joahcixbgb');
    table.boolean('ylkpkvogzp');
    table.string('ejonbolzfy');
    table.text('hfrlpuuyxc');
    table.float('ppioxjtcom');
    table.integer('isekygbjpk');
    table.float('jcqxutwqnp');
    table.integer('inwvighdmg');
  });
  await knex.schema.alterTable('tflouliwvu', function(table) {
    table.string('gkblgbpfhj');
    table.string('beezrvchnt');
    table.timestamp('bldhpbimwu');
  });
  await knex.schema.alterTable('ghvvnsgcne', function(table) {
    table.float('ghdffdarku');
    table.integer('wypookeqng');
    table.integer('naihjegfqd');
    table.text('lyvnnexjkf');
    table.boolean('qzbopridmw');
    table.json('vecixfoskc');
    table.bigInteger('fmdbhpxtvl');
  });
  await knex.schema.alterTable('sbkjknidie', function(table) {
    table.text('myamzwmysw');
    table.json('ovpxcjugah');
    table.float('ecafacoztt');
    table.json('iejcowetyw');
    table.timestamp('gyaygdznvx');
    table.string('lfznacjokv');
  });
  await knex.schema.alterTable('iwriatjcsw', function(table) {
    table.json('jivwafbsiw');
    table.integer('emxyjftplt');
    table.boolean('xlqckiiwkg');
    table.bigInteger('ssjoxgtxur');
    table.string('gzmuztfimr');
    table.float('bejmzffpje');
    table.bigInteger('hsnreqooux');
  });
  await knex.schema.alterTable('xhwmcyomii', function(table) {
    table.text('kinxqpmfuk');
    table.text('vhpuoaqviq');
    table.json('gjbmfpuzra');
    table.boolean('nqwfmzqets');
    table.timestamp('kjdmdzgjkr');
    table.timestamp('yuvtnmhqql');
  });
  await knex.schema.alterTable('jltykpwkcw', function(table) {
    table.boolean('ewaggpcjkr');
    table.integer('hgbvizdsen');
    table.text('kvmzenrxrk');
    table.text('avcuwvfzzi');
    table.timestamp('wtnbmvvlsa');
  });
  await knex.schema.alterTable('okjxqmvqkt', function(table) {
    table.text('ylmjigkveh');
    table.text('sqpqyrjnml');
    table.timestamp('xcrwftndeh');
    table.text('zunewtjpxx');
    table.boolean('noqtzbvvcx');
    table.bigInteger('ilrspecwnq');
    table.integer('qffshlqjbk');
  });
  await knex.schema.alterTable('ekoireknii', function(table) {
    table.bigInteger('fdilfhwhni');
    table.timestamp('iqwruooyaw');
    table.bigInteger('astkrypisv');
  });
  await knex.schema.alterTable('cdwcapurqd', function(table) {
    table.float('boqaidlsvs');
    table.string('mfredkbevb');
    table.json('xzqrktfodm');
    table.float('kfptpvgeio');
    table.float('byaoqsjxuk');
    table.timestamp('fmzyxlmpxo');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};