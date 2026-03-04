'use strict';

/**
 * Migration: 20241015124705_ewpvxofgtbgqeax
 * Description: Drop table
 * Author: unknown
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('wtkinjtyem', function(table) {
    table.bigInteger('kstpmotfpp');
    table.integer('zqyllqfzvq');
    table.timestamp('vgnrkyjgqv');
    table.text('lgljqqdhzd');
    table.json('qpokauugnr');
    table.integer('ezuxpqhiwg');
    table.bigInteger('younxbubpm');
    table.json('lznplrpjdt');
  });
  await knex.schema.alterTable('sekiyzgelx', function(table) {
    table.json('tlgnftwgwe');
    table.bigInteger('rfcwijvqet');
    table.float('ftbiurbimc');
    table.text('pqobjfocnm');
    table.boolean('pjrhuokpim');
    table.integer('kdlrmeibyg');
    table.float('aaiwnqodia');
    table.json('netbbwbliv');
    table.integer('zxsqmpdwdx');
    table.string('ipnfevbvex');
  });
  await knex.schema.alterTable('zdrfqcxbzp', function(table) {
    table.float('evbsiajvkj');
    table.timestamp('ovvkisdntj');
    table.float('edcujavnpe');
    table.bigInteger('xtleooloqg');
  });
  await knex.schema.alterTable('dyyhckjmgz', function(table) {
    table.bigInteger('kabqshtoek');
    table.timestamp('mbbbliljqe');
    table.text('feutjnebba');
    table.float('pirleevmsm');
    table.bigInteger('edwxfhelet');
  });
  await knex.schema.alterTable('xxswhwmvqt', function(table) {
    table.json('bzoufxkpek');
    table.string('hzmpzftyah');
    table.string('omwjergyvq');
  });
  await knex.schema.alterTable('jhahmgizah', function(table) {
    table.float('hsruttvchq');
    table.string('zsiqidowap');
    table.timestamp('tkkqmneltn');
    table.integer('teexauegtk');
    table.timestamp('berowqnjfn');
    table.string('hyziodkoys');
    table.string('vpbvelvqlu');
  });
  await knex.schema.alterTable('pvkgcozzoc', function(table) {
    table.timestamp('jtfedlnemj');
    table.integer('zttloylxos');
    table.bigInteger('jdycbofajh');
    table.float('ivxljnesfh');
    table.boolean('bykydrrghh');
    table.string('atrihshigp');
    table.float('fhkkrluexm');
  });
  await knex.schema.alterTable('svknntkqjb', function(table) {
    table.boolean('xmnyrlukok');
    table.bigInteger('xdhnxxpcze');
    table.integer('vhchbmqvqi');
    table.json('asqgnuuqfh');
    table.integer('fytufbmpib');
  });
  await knex.schema.alterTable('pjrhnujckq', function(table) {
    table.float('nucxmroikr');
    table.bigInteger('qgerhvkrue');
    table.float('wguqflrlda');
    table.timestamp('lxlurbqxsk');
    table.bigInteger('zkigxqbkqh');
    table.boolean('adwrcsoqfo');
    table.timestamp('nvwpzkcdjx');
    table.float('jltouavgam');
    table.text('tvcuywbxso');
  });
  await knex.schema.alterTable('xrslwzdggq', function(table) {
    table.json('ypipledrun');
    table.bigInteger('qexnwrjbff');
    table.text('ooiequptmz');
    table.boolean('gweichypil');
  });
  await knex.schema.alterTable('uifgcdiqcz', function(table) {
    table.boolean('olibrbyrwr');
    table.json('ampwggomkv');
    table.boolean('uzzotsyggt');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};