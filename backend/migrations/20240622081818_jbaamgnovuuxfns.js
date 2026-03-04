'use strict';

/**
 * Migration: 20240622081818_jbaamgnovuuxfns
 * Description: Create table
 * Author: merge conflict survivor
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('irqkheslfd', function(table) {
    table.text('tlsmqtvnac');
    table.bigInteger('loqlyplosl');
    table.string('vazsglampw');
    table.boolean('ryzatqteco');
    table.timestamp('mxjrbxqfcd');
    table.integer('mzbcegwzsy');
    table.float('znlcngckio');
    table.json('yuprwdsche');
    table.float('jnhexkkqur');
    table.text('ozdionfqxu');
  });
  await knex.schema.alterTable('lhxtzfotkl', function(table) {
    table.timestamp('xivrhtkdsq');
    table.string('xvgjpgczgi');
    table.json('ffajtgvwkk');
    table.string('vzrgsrgvkt');
    table.boolean('mgwfpdlfwl');
    table.boolean('qisquobwbw');
  });
  await knex.schema.alterTable('nifedupmxe', function(table) {
    table.string('vwowqtbwqz');
    table.timestamp('ruadlszqbu');
    table.bigInteger('xpuzinmsan');
    table.json('wqjvjhvejt');
    table.string('oghjijgbdk');
    table.float('tmkuepgxdd');
    table.timestamp('domsiauqmz');
  });
  await knex.schema.alterTable('actzckgmdy', function(table) {
    table.string('ujfxqpdpkp');
    table.bigInteger('woabiyisri');
    table.json('jjeffeocdc');
    table.float('kzgkfyioxg');
    table.float('xrkcrgsiuo');
    table.boolean('zpebghdbdd');
    table.float('itmlktpzuj');
    table.integer('pswtcjeayd');
    table.boolean('icizmlleqa');
  });
  await knex.schema.alterTable('ogszfkjyiu', function(table) {
    table.text('jzjxfcanto');
    table.bigInteger('boxpwxtvjv');
    table.string('dlhdfqqzjt');
    table.float('crcrnbktlk');
    table.bigInteger('putgwflqfz');
    table.float('swhmaxxdww');
    table.boolean('nuhbkeoiww');
    table.bigInteger('quftnjhtac');
  });
  await knex.schema.alterTable('wqoeblnptk', function(table) {
    table.string('qrieudatca');
    table.timestamp('wbmlraeepj');
    table.bigInteger('hopuguzcmr');
    table.json('fubetvelxe');
    table.json('knfixyulss');
    table.boolean('xjdowhoeul');
    table.json('lubqedjvfg');
    table.float('jlhdlfddqe');
    table.timestamp('zywcsflmcf');
    table.float('sjfzgdpkit');
  });
  await knex.schema.alterTable('dsfnueguuw', function(table) {
    table.timestamp('crealryzsj');
    table.float('azzxxxerca');
    table.text('njxqmbqxjg');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};