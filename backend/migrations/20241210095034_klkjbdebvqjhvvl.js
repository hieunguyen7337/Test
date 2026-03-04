'use strict';

/**
 * Migration: 20241210095034_klkjbdebvqjhvvl
 * Description: Add index
 * Author: dave (left the company)
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('agsyukttuv', function(table) {
    table.text('yoxvdxsobu');
    table.float('jpxwcskjra');
    table.json('tcuarxiwpo');
    table.integer('gpmmzffkhz');
    table.json('ktkhawqblo');
    table.float('ilsgwjclwt');
    table.text('xmqqywhuat');
    table.bigInteger('bekvvccnjb');
    table.timestamp('eagypovmla');
    table.timestamp('ttmpocpyhs');
  });
  await knex.schema.alterTable('tozqlqqzkm', function(table) {
    table.bigInteger('kwdntxhbpv');
    table.text('fdbrvfwway');
    table.timestamp('qhrbjjlzoc');
    table.bigInteger('ochgynxkwb');
    table.string('ncpjkqhduh');
    table.boolean('jszjkadagx');
    table.boolean('detikvafrb');
    table.string('xsuftylaqe');
  });
  await knex.schema.alterTable('lmsliwbdcl', function(table) {
    table.timestamp('kjbeexjrsl');
    table.json('lcfwxluila');
    table.integer('tvscvzyzyc');
    table.string('dpywrobikl');
    table.float('hcvbznjcwq');
    table.timestamp('mhyaolerwk');
  });
  await knex.schema.alterTable('zijhepfbni', function(table) {
    table.bigInteger('ohkmfryyhe');
    table.text('qgcosqizjz');
    table.integer('ozjprdkbga');
    table.text('wufyojohua');
    table.text('qpwyzncnjt');
  });
  await knex.schema.alterTable('oilijadnas', function(table) {
    table.timestamp('tajlkhimyl');
    table.json('wsaicmmmgr');
    table.boolean('tzlqzzvvxc');
    table.bigInteger('vvzopwnjli');
    table.boolean('rpqcofjhhx');
    table.string('jnjjyeupfr');
    table.integer('uqyxnnmsrj');
  });
  await knex.schema.alterTable('nvfrokzkzl', function(table) {
    table.integer('buefadofhx');
    table.string('ilnjwcenlf');
    table.integer('jdyiwruigf');
    table.boolean('zjkjenislu');
    table.text('gqzylblztd');
    table.json('zcznxtejwr');
    table.timestamp('rbiadybrqk');
    table.string('hmkndthzer');
    table.bigInteger('oikzlorjce');
    table.boolean('snhuokeqqr');
  });
  await knex.schema.alterTable('cqkjxmhvqp', function(table) {
    table.boolean('sdhjrwivgf');
    table.integer('tglzsdhewh');
    table.bigInteger('ecduxiudkp');
    table.json('qjwcdnaqzf');
  });
  await knex.schema.alterTable('kzfbsqlnje', function(table) {
    table.bigInteger('iwtgchoenw');
    table.text('iifdrvrduh');
    table.bigInteger('gngjishqpr');
  });
  await knex.schema.alterTable('oquuyypzsp', function(table) {
    table.bigInteger('lbfpfrbfdx');
    table.integer('ocxbbeqdib');
    table.float('wzffavswqy');
  });
  await knex.schema.alterTable('gcsflfssai', function(table) {
    table.timestamp('kejimkwimv');
    table.bigInteger('sebknnpjxi');
    table.boolean('zrhemsltpk');
    table.integer('mghamkjjma');
    table.boolean('qgbbdpqqla');
    table.json('wfhatvcbrs');
    table.integer('rdbyorqywj');
  });
  await knex.schema.alterTable('xemguvsros', function(table) {
    table.timestamp('ptbmawkagk');
    table.integer('iiquorttcc');
    table.timestamp('lcmizceeho');
    table.string('ikayzzavkp');
    table.string('shqorzgmuj');
  });
  await knex.schema.alterTable('xlgwqqelet', function(table) {
    table.integer('qvqgbzhbue');
    table.bigInteger('rbcujxtedc');
    table.string('inujupnkqc');
    table.boolean('pblfxdosed');
    table.float('cbdriqxdsl');
    table.integer('hdadlnfmbg');
  });
  await knex.schema.alterTable('hyisbygozz', function(table) {
    table.bigInteger('mjmqbssjks');
    table.float('rfumbbldgc');
    table.float('uvgznaqtwk');
    table.json('dxlrgllxnd');
    table.string('vsqzmtabzc');
    table.boolean('bdhykcveej');
  });
  await knex.schema.alterTable('zzxxhionvs', function(table) {
    table.boolean('huotnbnxvn');
    table.bigInteger('fgnydamddf');
    table.float('qwqbynbrgd');
    table.float('wsqdslmifi');
  });
  await knex.schema.alterTable('xmofjduojl', function(table) {
    table.boolean('rbdcfvlwkh');
    table.text('yrbuibfksy');
    table.boolean('zeakqmbqjc');
    table.float('bebdxazrnp');
    table.float('dcrfirsndi');
    table.boolean('airretgphz');
    table.timestamp('ropltkropi');
    table.timestamp('jnbzpyfzss');
    table.integer('fpuutoaqcb');
    table.string('hbjzknzglu');
  });
  await knex.schema.alterTable('luixwhcqvm', function(table) {
    table.float('vmhdmwafoc');
    table.integer('mzczailmas');
    table.timestamp('hokxojwkmw');
  });
  await knex.schema.alterTable('tskebfvhio', function(table) {
    table.json('hbklkduklg');
    table.timestamp('peheusvhup');
    table.boolean('dpjuxxrvwv');
    table.boolean('uwsxcnvwhe');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};