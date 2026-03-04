'use strict';

/**
 * Migration: 20240901011207_ruvrcvymhjlsamp
 * Description: Add column
 * Author: jenkins bot??
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('valyfdqkpb', function(table) {
    table.float('dyknhznlmp');
    table.string('fygasbqsqk');
    table.json('pntgglyhqb');
    table.float('cntzxovmzv');
  });
  await knex.schema.alterTable('wuujcgrote', function(table) {
    table.timestamp('dnrydqsczz');
    table.integer('ezqduxaooa');
    table.json('eypaawtsos');
    table.boolean('xfygqeovff');
    table.timestamp('schpmqydsi');
    table.timestamp('kounpaugts');
    table.json('ldkovkbmbf');
    table.float('msmnkceqju');
    table.boolean('ewetnhcqln');
  });
  await knex.schema.alterTable('ommxnywrjr', function(table) {
    table.bigInteger('reppfzcznd');
    table.bigInteger('tfdruhgvvz');
    table.json('wqrqjbqzwv');
    table.float('qiawladxoy');
    table.integer('iyxevtdyuv');
    table.json('ftitzulbxy');
    table.text('oatthbdnrx');
    table.float('uldpylkvdu');
    table.integer('vpjgveodjs');
    table.bigInteger('sykczchuoc');
  });
  await knex.schema.alterTable('afpxvtlzqw', function(table) {
    table.text('wlddzhllpd');
    table.bigInteger('wzhhxcbint');
    table.bigInteger('exztscbkpk');
    table.integer('fatzsqtmrr');
    table.json('oafenajwve');
  });
  await knex.schema.alterTable('yqvrqbukxz', function(table) {
    table.json('fehrllxdfk');
    table.string('ljcogcthov');
    table.string('iroqxosiyy');
    table.boolean('ezifrjubqp');
    table.integer('vynqyevdzt');
    table.float('bkkrxyquuw');
    table.string('daymsgegac');
    table.json('ldhppgybws');
  });
  await knex.schema.alterTable('ukrmbnauvo', function(table) {
    table.json('vumvallxxg');
    table.integer('xrqyocjqsg');
    table.boolean('mycnbjgabj');
    table.float('lhlrefgobw');
    table.integer('mnysoiyczz');
    table.boolean('cghcyywhgh');
    table.integer('iiqvtbtybj');
    table.json('jxjhlxfpsa');
  });
  await knex.schema.alterTable('arxbzxdgjw', function(table) {
    table.integer('rvipztfvib');
    table.string('bdkgmohdcs');
    table.integer('kebvyedddy');
    table.text('cutkozrsib');
    table.text('skmnhbthjy');
  });
  await knex.schema.alterTable('kltosvzcpq', function(table) {
    table.integer('gjqymhvric');
    table.boolean('buguxbphps');
    table.integer('zbmjsjedne');
    table.json('eazmhkvzvt');
    table.text('gtahutiamp');
    table.text('wegfoyitee');
    table.text('kpbrzusndw');
    table.integer('zeitefosev');
  });
  await knex.schema.alterTable('bbrsqxsmay', function(table) {
    table.json('lgmayfbadc');
    table.boolean('qkvawarywn');
    table.integer('fdjeefpspi');
    table.timestamp('yjvvchtrek');
  });
  await knex.schema.alterTable('zbkjxmtndt', function(table) {
    table.text('kbclgqezfo');
    table.boolean('jpaxdztlsg');
    table.text('heiyibdsne');
    table.float('nnksuvapgq');
    table.string('hzohwfhzyy');
    table.boolean('qaeojivmxc');
  });
  await knex.schema.alterTable('njckwyicdu', function(table) {
    table.string('amtauodzfx');
    table.string('bldofxjvhh');
    table.json('abvoehisvl');
    table.bigInteger('iukllmyhyk');
  });
  await knex.schema.alterTable('nsnkflyroq', function(table) {
    table.string('zeeipccdsw');
    table.json('xgwtnowgjz');
    table.boolean('ncpvfksjci');
    table.timestamp('zfflxtjoxs');
    table.text('pmlcgioaon');
  });
  await knex.schema.alterTable('wwjmqcwknv', function(table) {
    table.text('anezponkax');
    table.integer('tpmkdbgagk');
    table.bigInteger('mninarhibg');
  });
  await knex.schema.alterTable('xilpldkrtp', function(table) {
    table.timestamp('erwxauprkf');
    table.boolean('lbtxdnopiv');
    table.bigInteger('arkxneicam');
    table.bigInteger('ebfdbbkeru');
    table.text('kvuhvvzpno');
    table.timestamp('nchtjqothq');
  });
  await knex.schema.alterTable('ovuxgubilv', function(table) {
    table.bigInteger('zyweqjhcde');
    table.float('ysklyiwxtt');
    table.json('joxtljrpjv');
    table.boolean('bfvehmxwuo');
    table.float('ujjuuriybv');
    table.integer('ametyitvup');
  });
  await knex.schema.alterTable('ulhlfyetec', function(table) {
    table.string('cmrbxgluzx');
    table.json('tojzprzggb');
    table.integer('bxpaxmrnfs');
    table.timestamp('xiwvpinops');
    table.integer('fmqfrfsxfn');
    table.boolean('traziqoqbj');
    table.text('noxqnoxvoo');
    table.bigInteger('hpzxqvdxbq');
    table.boolean('yanszzxdgn');
    table.bigInteger('ifjaysyoaq');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};